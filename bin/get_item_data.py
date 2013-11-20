import urllib2
from bs4 import BeautifulSoup
from pprint import pprint
import json

# temp
from sys import exit

#C. Ned Batchelder
def chunks(l, n):
    """ Yield successive n-sized chunks from l.
    """
    for i in xrange(0, len(l), n):
        yield l[i:i+n]

base_url = 'https://www.pathofexile.com/item-data/'
filename = 'item_data.json'

pages = 'armour weapon jewelry'.split(' ') # currency doesn't work yet

def main():
    data = {}
    for p in pages:
        data[p.title()] = process_page(p)

    json_string = json.dumps(   data,
                                sort_keys = True,
                                indent = 4,
                                separators = (',', ': '))
    f = open(filename, 'w')
    f.write(json_string)

def process_page(page):
    url = base_url + page
    soup = BeautifulSoup(urllib2.urlopen(url).read())
    print 'getting', url

    data = {}
    main_container = soup('div', {'id' : 'mainContainerCenter'})[0]

    for section in main_container.find_all('div', recursive=False):
        try:
            [t, d] = process_section(section)
            data[t] = d
        except AttributeError:
            # just the 'clear' div
            pass

    return data

def process_section(section):
    section_title = section.h1.string
    # print section_title

    data = section.table
    headers = data.find_all('th')
    headers = map(lambda h: h.string, headers)
    data_length = len(headers)
    #print data_length, headers

    cell_data = map(lambda h: ' : '.join(h.strings), data.find_all('td'))
    # cell_data = map(lambda h: pprint(h), data.find_all('td'))

    chunked = list(chunks(cell_data, data_length))

    # print chunked[0]
    # print len(chunked)

    items = map(lambda x: dict(zip(headers, x)), chunked)
    # print items[0]
    # print len(items)
    
    #all_data[section_title] = items
    return (section_title, items)

if __name__ == '__main__':
    main()