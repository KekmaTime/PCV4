import java.util.Scanner;

public class LargestPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your number: ");

        int number = scanner.nextInt();
        int largest = 1;

        for (int i = 2; i <= number/2; i++) {
            if (number % i == 0) {
                if (CheckPrime(i) == -1) {
                    continue;
                } else {
                    largest = i;
                }
            }
        }
        System.out.println("The largest prime factor is " + largest);
    }

    public static int CheckPrime(double prime) {
        if (prime < 2) {
            return -1;
        }

        for (int i = 2; i <= Math.sqrt(prime); i++) {
            if (prime % i == 0) {
                return -1;
            }
        }
        return (int) prime;
    }
}