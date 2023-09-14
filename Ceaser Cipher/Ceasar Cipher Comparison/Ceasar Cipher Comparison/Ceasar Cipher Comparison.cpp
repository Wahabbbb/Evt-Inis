#include <iostream>
#include <string>

using namespace std;

// Function to encrypt text using Caesar cipher
string encrypt(const string& text, int shift) {
    string encryptedText = "";
    for (char c : text) {
        if (isalpha(c)) {
            char base = islower(c) ? 'a' : 'A';
            encryptedText += static_cast<char>((c - base + shift) % 26 + base);
        }
        else {
            encryptedText += c; // Keep non-alphabetical characters unchanged
        }
    }
    return encryptedText;
}

int main() {
    string last_name = "Wahab";
    string first_name = "Bilal";
    string patronymic = "Alaa";
    string full_name = last_name + " " + first_name + " " + patronymic;

    int min_shift = 1;
    int max_shift = 25;

    for (int shift = min_shift; shift <= max_shift; ++shift) {
        string encrypted_name = encrypt(full_name, shift);
        cout << "Shift " << shift << ": " << encrypted_name << endl;
    }

    return 0;
}
