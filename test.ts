let count = 0

fiberutils.fastForever(function () {
    count += 1
})
loops.everyInterval(1000, function () {
    serial.writeValue("count", count)
    count = 0
})

