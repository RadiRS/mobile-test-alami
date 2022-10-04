package com.mobiletestalami;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import java.util.Map;
import java.util.HashMap;
import android.provider.Settings;

public class RNConfigModule extends ReactContextBaseJavaModule {
    RNConfigModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "RNConfig";
    }

    @Override
    public Map<String, Object> getConstants() {
        // Create map constants to store any data
        final Map<String, Object> constants = new HashMap<>();
        // Fetching Android ID and storing it into a constant
        String deviceId = Settings.Secure.getString(getReactApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);
        // Put deviceId in to constants map
        constants.put("deviceId", deviceId);
        // Return value of constants
        return constants;
    }
}