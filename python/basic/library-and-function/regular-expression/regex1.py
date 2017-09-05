import re

print type(re)


# re.search()

regex = r"([a-zA-Z]+) (\d+)"

match = re.search(regex, "I was born on June 24")

if match != None:
	print "Match at index %s, %s" % (match.start(), match.end())

	print "Full match: %s " % match.group(0)

	print "Month: %s" % (match.group(1))

	print "Day: %s" % (match.group(2))


# re.match(pattern, string, flags=0)

# pattern : Regular expression to be matched.
# string : String where p attern is searched
# flags : We can specify different flags using bitwise OR

def findMonthAndDate(string):
	regex = r"[a-zA-Z]+ (\d+)"
	match = re.match(regex, string)

	if match == None:
		print "Not a valid date"
		return

	print "Given Data: %s " % (match.group())
	print "Month: %s " % (match.group(1))
	print "Day: %s" % (match.group(2))

findMonthAndDate("Jun 24")
print("")
findMonthAndDate("I was born on June 24")


# re.findall(): return all non-overlapping matches of pattern in string, as
# a list of strings. The string is scanned left-to-right and matches are
# returned in the order found

string = """ Hello my Number is 123456789 amd
			my friend's number is 987654321"""
regex = "\d+"
match = re.findall(regex, string)
print match

