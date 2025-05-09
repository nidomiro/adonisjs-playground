# Testing lifecycle-hooks of providers

## Execution order

Output:

```
A Provider constructor
A Provider register
B Provider constructor
B Provider register
C Provider constructor
C Provider register
A Provider boot
b Factory called
c Factory called
calling c in b
singelton from C Provider called
calling b in a
singelton from BProvider called
B Provider boot
C Provider boot
A Provider start
B Provider start
C Provider start
A Provider ready
B Provider ready
 CProvider ready
[08:29:41.808] INFO (48255): started HTTP server on localhost:3333

^CA Provider shutdown started
A Provider shutdown finished
B Provider shutdown started
B Provider shutdown finished
C Provider shutdown started
C Provider shutdown finished
```
