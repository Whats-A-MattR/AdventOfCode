def runLogic(filename):
  index = 0
  dict = {}
  largest = 0
  with open(filename) as file:
    total = 0
    for line in file:
      try:
        n = int(line)
        total = total+n
      except:
      #print(error)
        dict[index] = total
        total = 0
        index = index + 1

  for v in dict:
    if dict[v] > largest: largest = dict[v]

  return largest

print(runLogic('input.txt'))