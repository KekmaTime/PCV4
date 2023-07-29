user_input = input("Enter the text you want to encrypt: ")
encrypted_text = ""

for character in user_input:
    if character == 'a':
        encrypted_text += 'x'
    elif character == 'b':
        encrypted_text += 'y'
    elif character == 'c':
        encrypted_text += 'z'
    else:
        encrypted_text += chr(ord(character) - 3)

print("Encrypted Text:", encrypted_text)
