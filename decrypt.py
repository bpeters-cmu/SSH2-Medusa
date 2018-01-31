from simplecrypt import decrypt
import sys
import base64

key = sys.argv[1]
name = sys.argv[2]
data = sys.argv[3]

data = data.encode("ascii")
decrypted = decrypt(key, base64.decodebytes(data))

output_file = decrypted.decode("utf-8")
print(output_file)
path = '/SSH2-Medusa/medusa_keys/'
filename = name + '_decrypted'
f = open(filename, 'w' )
f.write(output_file)
f.close()
