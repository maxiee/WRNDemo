package com.wrndemo.ui;

import android.annotation.SuppressLint;
import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.TextView;

@SuppressLint("AppCompatCustomView")
public class MyCoolView extends TextView {
    public MyCoolView(Context context) {
        super(context, null);

    }

    public MyCoolView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs, 0);
    }

    public MyCoolView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }
}
