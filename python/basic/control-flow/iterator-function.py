# module itertools
# 1. accumulate[iter, func] -> list.reduce(a => func), defaul func is addition
# 2. chain(iter1, iter2..) -> This function is used to print 
# all the values in iterable targets one after another mentioned
# in its arguments -> list.append()

import itertools

import operator

print type(itertools)
print type(operator)

li1 = [1, 4, 5, 7]
li2 = [1, 6, 5, 9]
li3 = [8, 10, 5, 4]

print "The sum after each iteration is : "
print list(itertools.accumulate(li1))

print list(itertools.accumulate(li1, operator.mul))

print list(itertools.chain(li1,li2,li3))

# 3. chain.from_iterable()
li4 = [li1, li2, li3]
list(itertools.chain.from_iterable(li4))


# 4. compress(iter, selector) -> similar list.filter(boolean expresion)
list(itertools.compress("GEEKFORGEEKS", [1,0,0,0,0,1,0,0,1,0,0,0,0]))

# 5. dropwhile(func, seq) 
li = [2,4,5,7,8]
list(itertools.dropwhile(lambda x: x%2 == 0, li))

# 6. filterfalse(func, seq) -> list.filter(false)
list(itertools.filterfalse(lambda x: x%2 == 0))

# lambda x: x%2 == 0 <<-------->> x -> x % 2 == 0

li = [2, 4, 5, 7, 8, 10, 20]
li1 = [ (1, 10, 5), (8, 4, 1), (5, 4, 9), (11, 10 , 1) ]

# 7. islice(iterable, start, stop, step)
list(itertools.islice(li, 1, 6, 2))

# 8. starmap(func, tuple list)
list(itertools.starmap(min, li1))

# 9. takewhile(func, iterable)

# 10. tee(iterator, count)

# 11. zip_longest(iterable1, iterable2, fillval)

########### Combinatoric Iterators ######################

# 1. product(iter1, iter2): This iterator prints the cartesian product
# of the two iterable containers passed as arguments.

# 2. permutations(iter, group_size) This iterator prints all possible
# permutation of all elements of iterable. The size of each permuted group
# is decided by group_size argument.


# 3. combinations(iterable, group_size)

# 4. combinations_with_replacement(iterable, group_size)


###########3 Infinite Iterators ############################
# 1. count(start, step)

# 2. cycle(iterable)

# 3. repeat(val, num)
