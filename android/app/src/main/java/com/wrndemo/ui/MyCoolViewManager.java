package com.wrndemo.ui;

import android.util.Log;
import android.view.ViewGroup;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class MyCoolViewManager extends SimpleViewManager<MyCoolView> {
    public static final String COOL_VIEW_COOL_TEXT = "coolText";

    @Override
    public String getName() {
        return "MyCoolView";
    }

    @Override
    protected MyCoolView createViewInstance(ThemedReactContext reactContext) {
        return new MyCoolView(reactContext);
    }

    @ReactProp(name = COOL_VIEW_COOL_TEXT)
    public void setCoolText(final MyCoolView view, final String text) {
        Log.d("maxiee", "setCoolText = " + text);
        view.setText(text);
    }
}
