#include <stdio.h>
#include <string.h>

int main() {
    char arr[500];
    printf("Enter the text you want to convert: ");
    scanf("%[^\n]", arr);

    printf("The Hexadecimal representation of the text: ");
    for (int i = 0;arr[i] != '\0'; i++) {
        if(arr[i] == ' ')
        {
            printf("20");
        }
        else{
            printf("%02x", (unsigned char)arr[i]);
        }
    }
    return 0;
}
