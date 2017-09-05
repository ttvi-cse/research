# Python code to demonstate String encoding

### Encoding ####

# initialisting a String
a = 'GeeksforGeeks'

# initialisiting a byte object
c = b'GeeksforGeeks'

d = a.encode('ASCII')

if (d==c) :
	print ("Encoding succesful")
else : print ("Encoding Unsuccessful")

### Decoding ###

a = "GeeksforGeeks"

c = b'GeeksforGeeks'

d = c.decode('ASCII')

if(d==a):
	print ("Decoding successful")
else: print ("Decoding Unsuccessful")