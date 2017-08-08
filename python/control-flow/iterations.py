cars = ['Aston', 'Audi', 'McLaren']
i = 0
while (i < len(cars)):
	print cars[i]
	i += 1
# There is no C-Style for loop in Python, i.e, a loop like (int i = 0; i < n; i++)


# for each style
for x in cars:
	print x

# range style
for i in range(len(cars)):
	print cars[i]

# enumerate style
print enumerate(cars)
for i, x in enumerate(cars):
	print x
for x in enumerate(cars):
	print x[0], x[1]

for x in enumerate(cars, start=1)
	print (x[0], x[1])


# Looping extension
# Two iterators

# zip function (Both iterators to be used in single  looping construct)
cars = ["Aston", "Audi", "McLaren"]
accessories = ["GPS", "Car Repair Kit", "Dolby sound kit"]

for c, a in zip(cars, accessories):
	print "Car: %s, Accessory required: %s"\
			%(c,a)

# Unzip lists
l1, l2 = zip(*[('Aston','GPS'), ('Audi', 'Car Repair'), ('McLaren', 'Dolby sound kit')])

print (l1)
print (l2)