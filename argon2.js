export var Argon2_Actions;
(function (Argon2_Actions) {
    Argon2_Actions[Argon2_Actions["LoadArgon2"] = 0] = "LoadArgon2";
    Argon2_Actions[Argon2_Actions["Hash2i"] = 1] = "Hash2i";
})(Argon2_Actions || (Argon2_Actions = {}));
export var Argon2_ErrorCodes;
(function (Argon2_ErrorCodes) {
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_OK"] = 0] = "ARGON2_OK";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_OUTPUT_PTR_NULL"] = -1] = "ARGON2_OUTPUT_PTR_NULL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_OUTPUT_TOO_SHORT"] = -2] = "ARGON2_OUTPUT_TOO_SHORT";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_OUTPUT_TOO_LONG"] = -3] = "ARGON2_OUTPUT_TOO_LONG";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_PWD_TOO_SHORT"] = -4] = "ARGON2_PWD_TOO_SHORT";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_PWD_TOO_LONG"] = -5] = "ARGON2_PWD_TOO_LONG";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SALT_TOO_SHORT"] = -6] = "ARGON2_SALT_TOO_SHORT";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SALT_TOO_LONG"] = -7] = "ARGON2_SALT_TOO_LONG";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_AD_TOO_SHORT"] = -8] = "ARGON2_AD_TOO_SHORT";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_AD_TOO_LONG"] = -9] = "ARGON2_AD_TOO_LONG";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SECRET_TOO_SHORT"] = -10] = "ARGON2_SECRET_TOO_SHORT";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SECRET_TOO_LONG"] = -11] = "ARGON2_SECRET_TOO_LONG";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_TIME_TOO_SMALL"] = -12] = "ARGON2_TIME_TOO_SMALL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_TIME_TOO_LARGE"] = -13] = "ARGON2_TIME_TOO_LARGE";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_MEMORY_TOO_LITTLE"] = -14] = "ARGON2_MEMORY_TOO_LITTLE";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_MEMORY_TOO_MUCH"] = -15] = "ARGON2_MEMORY_TOO_MUCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_LANES_TOO_FEW"] = -16] = "ARGON2_LANES_TOO_FEW";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_LANES_TOO_MANY"] = -17] = "ARGON2_LANES_TOO_MANY";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_PWD_PTR_MISMATCH"] = -18] = "ARGON2_PWD_PTR_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SALT_PTR_MISMATCH"] = -19] = "ARGON2_SALT_PTR_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_SECRET_PTR_MISMATCH"] = -20] = "ARGON2_SECRET_PTR_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_AD_PTR_MISMATCH"] = -21] = "ARGON2_AD_PTR_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_MEMORY_ALLOCATION_ERROR"] = -22] = "ARGON2_MEMORY_ALLOCATION_ERROR";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_FREE_MEMORY_CBK_NULL"] = -23] = "ARGON2_FREE_MEMORY_CBK_NULL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_ALLOCATE_MEMORY_CBK_NULL"] = -24] = "ARGON2_ALLOCATE_MEMORY_CBK_NULL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_INCORRECT_PARAMETER"] = -25] = "ARGON2_INCORRECT_PARAMETER";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_INCORRECT_TYPE"] = -26] = "ARGON2_INCORRECT_TYPE";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_OUT_PTR_MISMATCH"] = -27] = "ARGON2_OUT_PTR_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_THREADS_TOO_FEW"] = -28] = "ARGON2_THREADS_TOO_FEW";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_THREADS_TOO_MANY"] = -29] = "ARGON2_THREADS_TOO_MANY";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_MISSING_ARGS"] = -30] = "ARGON2_MISSING_ARGS";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_ENCODING_FAIL"] = -31] = "ARGON2_ENCODING_FAIL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_DECODING_FAIL"] = -32] = "ARGON2_DECODING_FAIL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_THREAD_FAIL"] = -33] = "ARGON2_THREAD_FAIL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_DECODING_LENGTH_FAIL"] = -34] = "ARGON2_DECODING_LENGTH_FAIL";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2_VERIFY_MISMATCH"] = -35] = "ARGON2_VERIFY_MISMATCH";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2WASM_UNKNOWN"] = 1] = "ARGON2WASM_UNKNOWN";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2WASM_BAD_REQUEST"] = 2] = "ARGON2WASM_BAD_REQUEST";
    Argon2_ErrorCodes[Argon2_ErrorCodes["ARGON2WASM_UNSUPPORTED_BROWSER"] = 3] = "ARGON2WASM_UNSUPPORTED_BROWSER";
})(Argon2_ErrorCodes || (Argon2_ErrorCodes = {}));
const opts = {
    env: {
        emscripten_notify_memory_growth() {
        }
    }
};
async function loadArgon2(path = '/argon2.wasm') {
    if (typeof WebAssembly !== 'object') {
        throw Argon2_ErrorCodes.ARGON2WASM_UNSUPPORTED_BROWSER;
    }
    const source = await WebAssembly.instantiateStreaming(fetch(path), opts);
    return source.instance.exports;
}
export { loadArgon2 };
