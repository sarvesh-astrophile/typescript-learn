function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    } else {
        return `Chai order: ${kind}`
    }
}
