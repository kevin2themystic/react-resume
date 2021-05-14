import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init(
        {
            dsn: "https://56b14b16ccc04bc4bc4c876b9cc006a9@o660145.ingest.sentry.io/5764218",
            integrations: [new Integrations.BrowserTracing()],
            tracesSampleRate: 1.0
        }
    ); 
}

function logError () {
    
}

export default {
    init,
    logError
}
