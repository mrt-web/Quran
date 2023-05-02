from __future__ import print_function
import sys
import random
import string
import json
def randDoc(id):
    post = {"_id":id, "data": []}
    for field in range(1, 15):
        rand = random.randint(1,100)
        if rand <= 75:
            value = []
            for n in range(1, 5):
                value.append( ''.join(random.choice(string.ascii_lowercase) for i in range(20)) )
        else:
            value = ''.join(random.choice(string.ascii_lowercase) for i in range(20))
        post["data"].append(value)
    return post
for i in range(1000000):
    doc = randDoc(i)
    print(json.dumps(doc))
    if i % 1000 == 0:
        print(".", end="", file=sys.stderr)