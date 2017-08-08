class Test:
	# constructor
	def __init__(self, limit):
		self.limit = limit
	# Called when iteration is initialized
	def __iter__(self):
		self.x = 10
		return self
	# To move to next element. In python 3
	# we should replace next with __next__
	def next(self):
		x = self.x
		if x > self.limit:
			raise StopIteration

		self.x = x + 1;
		return x;

for i in Test(15):
	print i
for i in Test(5):
	print i


# Sample build-in iterators
print ("List Iteration")
l = ["geeks", "for", "geeks"]
for i in l:
	print i
print ("\nString Iteration")
s = "Geeks"
for i in s:
	print i
print ("\nDictionary Iteration")
d = dict()
d['xyz'] = 123
d['abc'] = 345
for i in d :
	print "%s %d" %(i, d[i])