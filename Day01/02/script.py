def runLogic(filename):
  index = 0
  arr = []
  with open(filename) as file:
    total = 0
    for line in file:
      try:
        n = int(line)
        total = total+n
      except:
       #print(total)
       arr.append(total)
       index = index+1
       total = 0
  arr.sort(reverse=True)
  #print(arr[0:3])
  #for item in arr[0:3]:
  #  print(item)

  with open('py_results.txt', 'a') as file:
    total = 0
    for item in arr[0:3]:
      file.write(f'{item}\n')
      total = total + item

    file.write(f'total: {total}')
    

runLogic('input.txt')