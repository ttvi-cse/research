# 1. int(a,base) : This function converts any data type to integer. 'Base'
# specifies the base in which string is if data type is string

# 2 float(): This function is used to convert any data type ot a floating point
# number

s = "10010"

c = int(s,2)
print ("After converting to integer base 2 : ")
print c

e = float(s)
print ("After converting to float : ")
print (e)

# 3. ord(): This function is used to convert a character to integer
# 4. hex(): This function is to convert integer to hexadecimal string.
# 5. oct(): This function is to convert integer to octal string.

s = '4'

c = ord(s)
print (c)

c = hex(56)
print c

c = oct(56)
print c

# 6. tuple(): this function is used to convert to a tuple

# 7. set(): This function returns the type after converting to set

# 8. list(): This function is used to convert any data type to a list type.

s = "geeks"

c = tuple(s) # s.split("")

print c


c = set(s) # {'k', 'e', 's', 'g'}
print c

c = list (s)
print c


# 9. dict()

# 10. str()

# 11. complex(real, imag) : : This function converts real numbers to
# complex(real, imag) number.

# example using dic(), complex(), str()

a = 1
b = 2

tup = (('a', 1),('f', 2),('g', 3))

c = complex(1,2)
print c
c = str(a)
print c
c = dict(tup)
print c