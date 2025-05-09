# Testing lifecycle-hooks of providers

## Execution order

Output:

```log
[11:40:41.961] INFO (44472): A Provider constructor
[11:40:41.961] INFO (44472): A Provider constructor finished
[11:40:41.961] INFO (44472): A Provider register
[11:40:41.961] INFO (44472): A Provider register finished
[11:40:41.961] INFO (44472): B Provider constructor
[11:40:41.961] INFO (44472): B Provider constructor finished
[11:40:41.961] INFO (44472): B Provider register
[11:40:41.961] INFO (44472): B Provider register finished
[11:40:41.961] INFO (44472): C Provider constructor
[11:40:41.961] INFO (44472): C Provider constructor finished
[11:40:41.961] INFO (44472): C Provider register
[11:40:41.961] INFO (44472): C Provider register finished
[11:40:41.965] INFO (44472): A Provider boot
[11:40:41.965] INFO (44472): DI: b Factory called
[11:40:41.965] INFO (44472): DI: c Factory called
[11:40:41.965] INFO (44472): DI: calling c in b Factory
[11:40:41.965] INFO (44472): DI: singleton from CProvider called
[11:40:41.965] INFO (44472): DI: calling b in a
[11:40:41.965] INFO (44472): DI: singleton from BProvider called
[11:40:41.965] INFO (44472): A Provider boot finished
[11:40:41.965] INFO (44472): B Provider boot
[11:40:42.467] INFO (44472): B Provider boot finished
[11:40:42.467] INFO (44472): C Provider boot
[11:40:42.968] INFO (44472): C Provider boot finished
[11:40:42.969] INFO (44472): A Provider start
[11:40:43.471] INFO (44472): A Provider start finished
[11:40:43.471] INFO (44472): B Provider start
[11:40:43.972] INFO (44472): B Provider start finished
[11:40:43.972] INFO (44472): C Provider start
[11:40:44.474] INFO (44472): C Provider start finished
[11:40:44.501] INFO (44472): A Provider ready
[11:40:44.501] INFO (44472): started HTTP server on localhost:3333
[11:40:45.002] INFO (44472): A Provider ready finished
[11:40:45.002] INFO (44472): B Provider ready
[11:40:45.504] INFO (44472): B Provider ready finished
[11:40:45.504] INFO (44472): C Provider ready
[11:40:46.005] INFO (44472): C Provider ready finished
^C
[11:40:50.982] INFO (44472): A Provider shutdown
[11:40:51.483] INFO (44472): A Provider shutdown finished
[11:40:51.483] INFO (44472): B Provider shutdown
[11:40:51.984] INFO (44472): B Provider shutdown finished
[11:40:51.984] INFO (44472): C Provider shutdown
[11:40:52.485] INFO (44472): C Provider shutdown finished
```
