use std::io;

fn main() {
    let mut text = String::new();
    println!("Enter the Text to Encrypt/Decrypt : ");

    io::stdin().read_line(&mut text).expect("Did'nt Read Text");
    let mut result  = String::from("");
    for character in text.chars() {
        let mut ascii = character as u8;
        if ascii.is_ascii_alphabetic() {
            let base = if ascii.is_ascii_uppercase(){b'A'} else {b'a'};
            ascii = base + (ascii - base + 13) % 26;
        }
        result.push(ascii as char);
    }
    println!("Encrypted/Decrypted Text: {}", result);
}
