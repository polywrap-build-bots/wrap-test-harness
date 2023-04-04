pub mod wrap;
pub use wrap::*;
use wrap::module::{ModuleTrait, Module};

impl ModuleTrait for Module {
    fn module_method(args: ArgsModuleMethod) -> ImplementationType {
        args.arg
    }

    fn abstract_module_method(args: ArgsAbstractModuleMethod) -> String {
        args.arg.str
    }
}
