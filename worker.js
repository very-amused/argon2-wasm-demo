var Argon2_Actions;
(function (Argon2_Actions) {
    Argon2_Actions[Argon2_Actions["LoadArgon2"] = 0] = "LoadArgon2";
    Argon2_Actions[Argon2_Actions["Hash2i"] = 1] = "Hash2i";
    Argon2_Actions[Argon2_Actions["Hash2d"] = 2] = "Hash2d";
    Argon2_Actions[Argon2_Actions["Hash2id"] = 3] = "Hash2id";
})(Argon2_Actions || (Argon2_Actions = {}));
var Argon2_ErrorCodes;
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

let argon2;
function getErrorMessage(err) {
    if (err instanceof Error) {
        return err.message;
    }
    else if (typeof err === 'string') {
        return err;
    }
    else {
        return 'An unknown error has occured, and a message was unable to be parsed from this error';
    }
}
function postError(err) {
    if (err in Argon2_ErrorCodes) {
        postMessage({
            code: err
        });
    }
    else {
        postMessage({
            code: Argon2_ErrorCodes.ARGON2WASM_UNKNOWN,
            message: getErrorMessage(err)
        });
    }
}
function overwriteSecure(view, passes = 3) {
    for (let i = 0; i < passes; i++) {
        crypto.getRandomValues(view);
    }
}
async function simdSupported(wasmRoot = '.') {
    const res = await fetch(`${wasmRoot}/simd-test.wasm`);
    const raw = await res.arrayBuffer();
    return WebAssembly.validate(raw);
}
async function loadArgon2(wasmRoot = '.', simd = false) {
    if (typeof WebAssembly !== 'object') {
        throw Argon2_ErrorCodes.ARGON2WASM_UNSUPPORTED_BROWSER;
    }
    const opts = {
        env: {
            emscripten_notify_memory_growth() {
            }
        }
    };
    const file = (simd && (await simdSupported(wasmRoot))) ? 'argon2-simd.wasm' : 'argon2.wasm';
    let source;
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        source = await WebAssembly.instantiateStreaming(fetch(`${wasmRoot}/${file}`), opts);
    }
    else {
        const res = await fetch(`${wasmRoot}/${file}`);
        const raw = await res.arrayBuffer();
        source = await WebAssembly.instantiate(raw, opts);
    }
    return source.instance.exports;
}
function hash(options, type) {
    const saltLen = options.salt.byteLength;
    const saltPtr = argon2.malloc(saltLen);
    let saltView = new Uint8Array(argon2.memory.buffer, saltPtr, saltLen);
    for (let i = 0; i < saltLen; i++) {
        saltView[i] = options.salt[i];
    }
    const encoded = new TextEncoder().encode(options.password.normalize('NFKC'));
    const passwordLen = encoded.byteLength;
    const passwordPtr = argon2.malloc(passwordLen);
    let passwordView = new Uint8Array(argon2.memory.buffer, passwordPtr, passwordLen);
    for (let i = 0; i < passwordLen; i++) {
        passwordView[i] = encoded[i];
    }
    overwriteSecure(encoded);
    const hashLen = options.hashLen;
    const hashPtr = argon2.malloc(hashLen);
    const args = [
        options.timeCost,
        options.memoryCost,
        1,
        passwordPtr,
        passwordLen,
        saltPtr,
        saltLen,
        hashPtr,
        hashLen
    ];
    let code;
    switch (type) {
        case 0:
            code = argon2.argon2i_hash_raw.apply(null, args);
            break;
        case 1:
            code = argon2.argon2d_hash_raw.apply(null, args);
            break;
        case 2:
            code = argon2.argon2id_hash_raw.apply(null, args);
            break;
    }
    passwordView = new Uint8Array(argon2.memory.buffer, passwordPtr, passwordLen);
    overwriteSecure(passwordView);
    argon2.free(passwordPtr);
    saltView = new Uint8Array(argon2.memory.buffer, saltPtr, saltLen);
    overwriteSecure(saltView);
    argon2.free(saltPtr);
    overwriteSecure(options.salt);
    const hash = new Uint8Array(hashLen);
    const hashView = new Uint8Array(argon2.memory.buffer, hashPtr, hashLen);
    for (let i = 0; i < hashLen; i++) {
        hash[i] = hashView[i];
    }
    overwriteSecure(hashView);
    argon2.free(hashPtr);
    postMessage({
        code,
        body: hash
    }, [hash.buffer]);
}
onmessage = async function (evt) {
    if (Array.isArray(evt.data) || typeof evt.data !== 'object') {
        postMessage({
            code: Argon2_ErrorCodes.ARGON2WASM_BAD_REQUEST,
            body: null
        });
    }
    const req = evt.data;
    switch (req.action) {
        case Argon2_Actions.LoadArgon2:
            try {
                const params = req.body;
                argon2 = await loadArgon2(params.wasmRoot, params.simd);
            }
            catch (err) {
                postError(err);
                return;
            }
            postMessage({
                code: Argon2_ErrorCodes.ARGON2_OK
            });
            break;
        case Argon2_Actions.Hash2i:
            hash(req.body, 0);
            break;
        case Argon2_Actions.Hash2d:
            hash(req.body, 1);
            break;
        case Argon2_Actions.Hash2id:
            hash(req.body, 2);
            break;
        default:
            postMessage({
                code: Argon2_ErrorCodes.ARGON2WASM_BAD_REQUEST
            });
    }
};
