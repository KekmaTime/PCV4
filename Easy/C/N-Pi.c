#include <stdio.h>
#include <math.h>

int main()
{
    printf("Enter N:");
    int n;
    scanf("%d", &n);
    double sum = 0;
    for(int i=0; i<n; i++)
    {
        sum = sum + pow(-1.0, i)/(2 * i + 1);
    }
    printf("The value of Pi is: %lf\n", sum*4);

    return 0;
}