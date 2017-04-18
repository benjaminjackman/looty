cd ..
rmdir /s /q build
mkdir build

xcopy looty\target\web\public\main\looty.html build\
xcopy looty\target\web\public\main\popup.html build\
xcopy looty\target\web\public\main\looty-opt.js build\
xcopy looty\target\web\public\main\manifest.json build\
xcopy looty\target\web\public\main\images build\images\ /s
xcopy looty\target\web\public\main\jslib build\jslib\ /s
xcopy looty\target\web\public\main\less build\less\ /s
cd bin
