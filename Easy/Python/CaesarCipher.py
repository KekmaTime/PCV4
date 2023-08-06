user_input = input("Enter the text you want to decrypt: ")
decrypted_text = ""

for character in user_input:
    if character == 'x':
        decrypted_text += 'a'
    elif character == 'y':
        decrypted_text += 'b'
    elif character == 'z':
        decrypted_text += 'c'
    else:
        decrypted_text += chr(ord(character) + 3)

print("Decrypted Text:", decrypted_text)
