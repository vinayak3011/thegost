from ceaser import encode, decode
from filehelper import  read_from_file, write_to_file,appends_to_file
from graphhelper import plot_bar_graph_from_python_dict

en = read_from_file(file_path="./College python/encoded_text_large.txt")
length = len(en)  # renaming len variable
fr = {}
for i in range(0, length):
    char = ord(en[i])
    if char in fr:  # check if char already exists in fr
        fr[char] += 1
    else:
        fr[char] = 1
print(fr)
plot_bar_graph_from_python_dict(fr)