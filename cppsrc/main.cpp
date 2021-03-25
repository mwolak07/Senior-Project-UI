#include <node_api.h>
#include <iostream>

// Function that multiplies two doubles
double doubleMult(double a, double b) {
    return a * b;
}

// Function that converts JS napi_value into C++ double
double JSNumToDouble(napi_env env, napi_value input) {
    double output;
    napi_status status;

    status = napi_get_value_double(env, input, &output);
    // Throws JS Error if napi_get_value_double was not successful
    if(status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to convert napi_value to double");
    }

    return output;
}

// Function that converts C++ double into JS napi_value
napi_value DoubleToJSNum(napi_env env, double input) {
    napi_value output;
    napi_status status;

    status = napi_create_double(env, input, &output);
    // Throws JS Error if napi_create_double was not successful
    if(status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to convert double to napi_value");
    }

    return output;
}

// Function to convert JS Numbers to C++ Doubles,
// execute multiplier function, 
// and convert result back into JS Number
napi_value multiplier(napi_env env, napi_callback_info info) {
    napi_status status;
    size_t argc = 2;
    napi_value argv[2];
    double inputA;
    double inputB;
    double result;
    napi_value napiResult;

    // Gets info about callbacks, populating argv array with JS input data
    status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    // Throws JS Error if napi_get_cb_info was not successful
    if(status != napi_ok) {
        napi_throw_error(env, NULL, "Failed to parse arguments");
    }

    // Converting napi_value inputs to C++ doubles
    inputA = JSNumToDouble(env, argv[0]);
    inputB = JSNumToDouble(env, argv[1]);

    // Calling C++ multiplier function
    result = doubleMult(inputA, inputB);

    // Converting double result back to napi_value
    napiResult = DoubleToJSNum(env, result);

    return napiResult;
}

// Initializer function necessary for N-API
napi_value Init(napi_env env, napi_value exports) {
    napi_status status;
    napi_value fn;

    // Allows creation of function in native code, preparing multiplier
    status = napi_create_function(env, NULL, 0, multiplier, NULL, &fn);
    // Throws JS Error if napi_create_function was not successful,
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to wrap native function");
    }

    // Sets property so that the function is availible from JS
    status = napi_set_named_property(env, exports, "multiplier", fn);
    // Throws JS Error if napi_set_named_property was not successful,
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to populate exports");
    }

  return exports;
}

// Used to register the N-API module
NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)