pub mod wrap;
pub use wrap::*;
use wrap::module::{ModuleTrait, Module};

impl ModuleTrait for Module {
    fn bytes_method(args: ArgsBytesMethod) -> Vec<u8> {
        let arg_str = match String::from_utf8(args.arg.prop) {
            Ok(s) => s,
            Err(_e) => panic!("Parsing error"),
        };
        String::into_bytes([&arg_str, " Sanity!"].concat())
    }
}
