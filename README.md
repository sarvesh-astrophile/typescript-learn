# typescript-learn

## Flow of typscript

TS Code -> lexer-> parser -> Binder-> Checker -> Emitter

1. Binder does symbol tables, parent pointer, flow nodes
2. Checker does sytax check and short circuit
3. Emitter does code generation and stripping type annotations
