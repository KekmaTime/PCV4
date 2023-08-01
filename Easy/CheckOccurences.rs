use std::io;

fn main() {

    let mut input = String::from("hello world");

    let trimmed = input.trim();

    for ch in trimmed.chars() {
        println!("{}:{}", ch, occurrence(ch, &trimmed));
    }
}

fn occurrence(ch: char, s: &str) -> i32 {
    let mut count = 0;
    for c in s.chars() {
        if c == ch {
            count += 1;
        }
    }
    count
}
