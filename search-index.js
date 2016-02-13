var searchIndex = {};
searchIndex['treebitmap'] = {"items":[[3,"IpLookupTable","treebitmap","A fast, compressed IP lookup table.",null,null],[3,"Iter","","Iterates over prefixes and associated values. The prefixes are returned in \"tree\"-order.",null,null],[3,"IntoIter","","Converts ```IpLookupTable``` into an iterator. The prefixes are returned in \"tree\"-order.",null,null],[8,"IpLookupTableOps","","The operations defined on the lookup table.",null,null],[10,"insert","","Insert a value for the prefix designated by ip and masklen. If prefix existed previously, the old value is returned.\n# Example\n```\nuse treebitmap::{IpLookupTable, IpLookupTableOps};\nuse std::net::Ipv6Addr;",0,{"inputs":[{"name":"iplookuptableops"},{"name":"addr"},{"name":"u32"},{"name":"t"}],"output":{"name":"option"}}],[10,"remove","","Remove an entry from the lookup table. If the prefix existed previously, the value is returned.\n# Example\n```\nuse treebitmap::{IpLookupTable, IpLookupTableOps};\nuse std::net::Ipv6Addr;",0,{"inputs":[{"name":"iplookuptableops"},{"name":"addr"},{"name":"u32"}],"output":{"name":"option"}}],[10,"exact_match","","Perform exact match lookup of ```ip```/```masklen``` and return the value.\n# Example\n```\nuse treebitmap::{IpLookupTable, IpLookupTableOps};\nuse std::net::Ipv6Addr;",0,{"inputs":[{"name":"iplookuptableops"},{"name":"addr"},{"name":"u32"}],"output":{"name":"option"}}],[10,"longest_match","","Perform longest match lookup of ```ip``` and return the best matching prefix, designated by ip, masklen, along with its value.\n# Example\n```\nuse treebitmap::{IpLookupTable, IpLookupTableOps};\nuse std::net::Ipv6Addr;",0,{"inputs":[{"name":"iplookuptableops"},{"name":"addr"}],"output":{"name":"option"}}],[10,"iter","","Returns iterator over prefixes and values.\n# Example\n```\nuse treebitmap::{IpLookupTable, IpLookupTableOps};\nuse std::net::Ipv6Addr;",0,{"inputs":[{"name":"iplookuptableops"}],"output":{"name":"iter"}}],[11,"new","","Initialize an empty lookup table with no preallocation.",1,{"inputs":[{"name":"iplookuptable"}],"output":{"name":"self"}}],[11,"with_capacity","","Initialize an empty lookup table with pre-allocated buffers.",1,{"inputs":[{"name":"iplookuptable"},{"name":"usize"}],"output":{"name":"self"}}],[11,"mem_usage","","Return the bytes used by nodes and results.",1,null],[11,"insert","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv4addr"},{"name":"u32"},{"name":"t"}],"output":{"name":"option"}}],[11,"remove","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv4addr"},{"name":"u32"}],"output":{"name":"option"}}],[11,"exact_match","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv4addr"},{"name":"u32"}],"output":{"name":"option"}}],[11,"longest_match","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv4addr"}],"output":{"name":"option"}}],[11,"iter","","",1,{"inputs":[{"name":"iplookuptable"}],"output":{"name":"iter"}}],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"into_iter","","",1,{"inputs":[{"name":"iplookuptable"}],"output":{"name":"intoiter"}}],[11,"insert","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv6addr"},{"name":"u32"},{"name":"t"}],"output":{"name":"option"}}],[11,"remove","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"option"}}],[11,"exact_match","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv6addr"},{"name":"u32"}],"output":{"name":"option"}}],[11,"longest_match","","",1,{"inputs":[{"name":"iplookuptable"},{"name":"ipv6addr"}],"output":{"name":"option"}}],[11,"iter","","",1,{"inputs":[{"name":"iplookuptable"}],"output":{"name":"iter"}}],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"into_iter","","",1,{"inputs":[{"name":"iplookuptable"}],"output":{"name":"intoiter"}}]],"paths":[[8,"IpLookupTableOps"],[3,"IpLookupTable"],[3,"Iter"],[3,"IntoIter"]]};
initSearch(searchIndex);
