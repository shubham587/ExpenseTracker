# happy = "aqyhppqahyrpbyp"
# ch=0
# ca=0
# cp=0
# cy=0

# for char in happy:
#     if(char=='h'):
#         ch+=1
#     elif(char=='a'):
#         ca+=1
#     elif(char=='p'):
#         cp+=1
#     elif(char=='y'):
#         cy+=1
# arr = [ch, ca, cp/2, cy]
# minVal = min(arr) 
# print(minVal)



stri = "aaacccc"
arr = []
tArr = []
count = stri[0]
for i in range(len(stri)):
    if count == stri[i]:
        arr.append(stri[i])
        count=stri[i]
    else:
        if(len(tArr)<len(arr)):
            tArr=[]
            for j in range(len(arr)):
                tArr.append(arr[j])
        arr=[stri[i+1]]
        count=stri[i]


if(len(tArr)<len(arr)):
    tArr=[]
    for j in range(len(arr)):
        tArr.append(arr[j])
        
sum = 2 * len(tArr) - len(tArr)
        
print(sum, "max")
    