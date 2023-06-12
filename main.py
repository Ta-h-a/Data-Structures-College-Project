# Check Pair

def checkPair(A,size,x):
    for i in range(0,size-1):
        for j in range(i+1,size):
            if (A[i]+A[j]==x):
                print(f"Pair with Given sum ({x}) is",{A[i]},{A[j]})
                return 1
        return 0
    
array = [0,-1,2,-3,1,55]
x = 2
if (checkPair(array,len(array),x)):
    print("Valid pair exists for the value: ",x)
else:
    print("valid pair does not exists for the value: ",x)

# Count Frequency

def countFreq (arr,n):
    visited = [False for i in range(n)]
    for i in range(n):
        if (visited[i]==True):
            continue
        count = 1
        for j in range(i+1,n):
            if (arr[i]==arr[j]):
                visited[j] = True
                count += 1
        print(arr[i],count)

arr = [50,50,3,60,7,8,50,45,55,45,100,100,100,100000]
n = len(arr)
countFreq(arr,n)