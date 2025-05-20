# Testing lifecycle-hooks of providers

## Execution order

### Before 6.18.0

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

### After 6.18.0 (with experimental Flag)

Output:

```log
[07:31:21.208] INFO (98196): A Provider constructor
[07:31:21.208] INFO (98196): A Provider constructor finished
[07:31:21.209] INFO (98196): A Provider register
[07:31:21.209] INFO (98196): A Provider register finished
[07:31:21.209] INFO (98196): B Provider constructor
[07:31:21.209] INFO (98196): B Provider constructor finished
[07:31:21.209] INFO (98196): B Provider register
[07:31:21.209] INFO (98196): B Provider register finished
[07:31:21.209] INFO (98196): C Provider constructor
[07:31:21.209] INFO (98196): C Provider constructor finished
[07:31:21.209] INFO (98196): C Provider register
[07:31:21.209] INFO (98196): C Provider register finished
[07:31:21.219] INFO (98196): A Provider boot
[07:31:21.219] INFO (98196): DI: b Factory called
[07:31:21.219] INFO (98196): DI: c Factory called
[07:31:21.219] INFO (98196): DI: calling c in b Factory
[07:31:21.219] INFO (98196): DI: singleton from CProvider called
[07:31:21.219] INFO (98196): DI: calling b in a
[07:31:21.219] INFO (98196): DI: singleton from BProvider called
[07:31:21.219] INFO (98196): A Provider boot finished
[07:31:21.219] INFO (98196): B Provider boot
[07:31:21.720] INFO (98196): B Provider boot finished
[07:31:21.720] INFO (98196): C Provider boot
[07:31:22.221] INFO (98196): C Provider boot finished
[07:31:22.222] INFO (98196): A Provider start
[07:31:22.723] INFO (98196): A Provider start finished
[07:31:22.723] INFO (98196): B Provider start
[07:31:23.223] INFO (98196): B Provider start finished
[07:31:23.224] INFO (98196): C Provider start
[07:31:23.725] INFO (98196): C Provider start finished
[07:31:23.770] INFO (98196): A Provider ready
[07:31:24.272] INFO (98196): A Provider ready finished
[07:31:24.272] INFO (98196): B Provider ready
[07:31:23.770] INFO (98196): started HTTP server on localhost:3333
[07:31:24.774] INFO (98196): B Provider ready finished
[07:31:24.775] INFO (98196): C Provider ready
[07:31:25.275] INFO (98196): C Provider ready finished
^C⏎                                                                                                                                        [07:31:28.890] INFO (98196): C Provider shutdown
[07:31:29.392] INFO (98196): C Provider shutdown finished
[07:31:29.392] INFO (98196): B Provider shutdown
[07:31:29.892] INFO (98196): B Provider shutdown finished
[07:31:29.893] INFO (98196): A Provider shutdown
[07:31:30.393] INFO (98196): A Provider shutdown finished
```
