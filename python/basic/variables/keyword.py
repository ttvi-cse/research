import keyword

s = "for"
s1 = "geeksforgeeks"
s2 = "elif"
s3 = "elseif"
s4 = "nikhil"
s5 = "assert"
s6 = "shambhavi"
s7 = "True"
s8 = "False"
s9 = "aksht"
s10 = "akash"
s11 = "break"
s12 = "ashty"
s13 = "lambda"
s14 = "suman"
s15 = "try"
s16 = "vaishnavi"

list = [s1, s2, s3, s4, s5, s6, s7, 
	s8, s9, s10, s11, s12, s13, s14, s15, s16];

for s in list:
	if keyword.iskeyword(s): print s + " is a python keyword"
	else : print s + " is not a python keyword"