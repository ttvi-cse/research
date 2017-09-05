# while expression:
#	statememt(s)

count = 0
while (count < 3):
	count = count + 1
	print "Hello Geek"

# It is not recommended to use while loop for
# iterators in python

# for iterator_var in sequence:
	# statements

print "List Iteration"
l = ["geeks", "for", "geeks"]
for i in l:
	print (i)

print "\nTuple Iteration"
t = ("geeks", "for", "geeks")
for i in t :
	print i

print "\nDictinoary Iteration"
d = dict()
d['xyz'] = 132
d['abc'] = 345
for i in d :
	print("%s %d" % (i, d[i]))


# while expression:
	# while expression:
		# statement(s)
		# statement(s)

for i in range(1, 5):
	for j in range(i):
		print i
	print 

# continue statement

for letter in 'geeksforgeeks':
	if letter == 'e' or letter == 's':
		continue
	print 'Current Letter :', letter
	var = 10


# break statement

for letter in 'geeksforgeeks':
	# break the loop as soon it sees 'e'
	# or 's'
	if letter == 'e' or letter == 's':
		break
print 'Current Letter :', letter


# pass statement
# pass statement to write empty loops. Pass is also used for 
# empty control statememt, function and classes
for letter in 'geeksforgeeks':
	pass
print 'Last Letter :', letter

# exercise

list = [1,2,3,4,5,6]

for i in range(0, len(list)):
	print list[len(list)-i-1]
