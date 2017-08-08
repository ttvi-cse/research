n = int(raw_input())
arr = [int(x) for x in raw_input().split()] # list comprehension
summation = 0
for x in arr:
	summation += x
print (summation)

from sys import stdin, stdout

def main():
	n = stdin.readline()
	arr = [int(x) for x in stdin.readline().split()]
	summation = 0
	for x in arr:
		summation += x
	stdout.write(str(summation))

if __name__ == "__main__":
	main()