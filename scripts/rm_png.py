import os
import re

_files = []

for path, subdirs, files in os.walk(".."):
    for name in files:
        _files.append("../" + os.path.join(path, name))

print(len(_files))
for file in _files:
    if(re.search(r"\.png$", file, re.IGNORECASE)):
        os.remove(file) 