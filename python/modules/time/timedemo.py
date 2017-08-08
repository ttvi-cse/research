import time

print ("Seconds elapsed since the epoch are : ")
print (time.time())

print ("Time calculated acc. to given seconds is : ")
print time.gmtime()	

ti = time.gmttime()
print time.acstime(ti)
print time.ctime()


print time.ctime()

time.sleep(4)

print time.ctime()