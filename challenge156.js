/* Description //
Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line. A given rucksack always has the same number of items in each of its two compartments, so the first half of the characters represent items in the first compartment, while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr, while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
*/
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getDuplicatePriority(arr) {
  let chars = 0;
  for (let word of arr) {
    let sp = word.split("");
    let half = sp.length / 2;
    let first = sp.slice(0, half);
    let second = sp.slice(half);
    chars += letters.indexOf(first.find((c) => second.includes(c))) + 1;
  }
  return chars;
}
//part two

function getDuplicatePriority(arr) {
  let chars = [];
  // let count = 0;
  for (let i = 0; i < arr.length; i += 3) {
    const chunk = arr.slice(i, i + 3);
    chars.push(chunk);
  }
  //  chars.forEach((items) => {
  //    const [a, b, c] = items;
  //    count +=
  //      letters.indexOf(
  //        a.split("").find((val) => b.includes(val) && c.includes(val))
  //      ) + 1;
  //  });
  //  return count;
  return chars.reduce((acc, [a, b, c]) => {
    let priority = letters.indexOf(
      a.split("").find((char) => b.includes(char) && c.includes(char))
    );
    return acc + priority + 1;
  }, 0);
}

console.log(
  getDuplicatePriority([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ])
);
console.log(
  getDuplicatePriority([
    "BzRmmzZHzVBzgVQmZLPtqqffPqWqJmPLlL",
    "hpvvTDcrCjhpcrvcGGhfLHMlLtMCqflNlWPJlJ",
    "hGjhncHhGnhbTHczBBZVVSbRwgSgRV",
    "rWVQjPQQjGRWNSrWrPjcptwBpqqJBtJBBcZgMdtq",
    "zzmmpzfTCFpTlMlJJwBgMlqMBt",
    "TvLszpbhhTLmsnRQPDQGWDWRvQSR",
    "zGzvLlGlQHLGBQZlhBWhdjRdmdWRcjPj",
    "fTJNfTfNSRWPhjdjfj",
    "pbsbVVnpSnbVTprnbqqrzvLLgQlGLPLHll",
    "ZCCCsWvNvmsCsCmZLZmgMLRpQMhwQRpQRfphfprpTfpM",
    "tlncPjzlndctbzcPPBcjwDphwrfGGDffbDRpDTGG",
    "cdqnddwzqjNVWVLZZLZq",
    "DTLbDbRrlQbwhhNrmmfwdt",
    "zzMJMzjCjJJjvLjMPJpcgPpzfhHdfqWcqddwtwfqdttcNtdN",
    "pJCzVpCvDZBLsVRQ",
    "STzBBbJzRRBZBRTqCCsfZLtNNLClCsfh",
    "jsQnnQjjHcvQFrcPwCmtLCNlvDfftfff",
    "sGFscMQQMMpqzqbMbd",
    "QlNDWGsjQjgQllWQsbtzqTJczTJcbFmmFJJP",
    "MhLrhgLVndRmzJFzVqqJqP",
    "pSLnMdwhwdRZRSwhLZwLhdGWQjlsgWjNQWWSvgBsWDlj",
    "THjSRFSddTjdBTcPLcVVvVBw",
    "GzWnWfndWfznDfsnsBsPVwVwPPLL",
    "zNflzJWqqzQDdSStHNZNpFFtbj",
    "FSzDmsFSFlDlBzqVjqHHjHHpVgHLbp",
    "rTrTtTQQntRQnQJQgggHZttVgHLBLhZL",
    "WTJJRRQCRRJTRdBCRdvRNDFSWFMPmDlPPSsNPSzS",
    "WQldlMtMVQgVMQHnDGbHGGnRnQmD",
    "rqcZPrCFjmHlbGjZ",
    "zSScchqwchBzTzFzhhSlcCwNtdVWWJgsVdMtWNgNVWTJTd",
    "lMZqjMWllrTTspjprWWSSwgWNSVNDmWGVwFwgN",
    "cdCCdLHcnndHJnmCRntLBnRzDvFNtNDVzgSgwDgFNVzFVv",
    "BRLcCCJCmJdcRhfjPPZphrlrPqlZ",
    "GdGqcrrZGDrvDJJqJHcBvmFFgmFMMgMgBtMLTssLmF",
    "NbPVPDlljPmTmsTj",
    "VfQDhflCCRWdcrQwJvvnJv",
    "RLcWgLCqqPQLcqZwzHgwmmrmmtgwTw",
    "DhbhNrMpnJSDJwVTHmmTVnTTVj",
    "lrsvblMDlcWcfQPQ",
    "PVldlphHwGwJJGdjZZWsRbbsGsNWrWQbNbQR",
    "SqcDvTmDLtfmSmtqppfqzTgTQBrRQsbCFWbNNFQFBBrRbLNb",
    "MgtmTgtfpqVlnVddZMwV",
    "BdmfmPBPSbSNdGSdvWrwcZrccZPPcZnH",
    "jzzLsjsMRlQQVHwswvvZrCHrrT",
    "VqhzVFzplFlpLwpMphLRQQVRmSqgbdGtNJBmNSmgGbtggSgt",
    "DHVpNZjdZjFZWVFHpvFvzmlRzPnlfznFRz",
    "lrTBTsBwwMbrrwLPPfwGmGzvRf",
    "scrtMhMCtJBBBclbHdHttWZWDSqDSjHj",
    "wzqsPmqsbsfqBwPMNRMMZcZmFFNtZM",
    "CgCnhlvvLJgcRFNNBdCpWM",
    "QnQrVgHSvVHjbjTGBbbTHb",
    "HdrVrdqFDdZVmHgRmDRFHMnTdTssMGnLnPJLbPTbCs",
    "SczlScjwcNzplNzQSSfjwQSrTGGsbTsnTCnGTMCMLMGGbN",
    "wQlfjrhfhQFHqZhRZRtD",
    "RsfJDGJvzPNcjpddSWJWMd",
    "LLCbBCwCrCmVVnrmhQFmbVhdcdlWpjZzSpMdWSpcWczSBj",
    "rrLCbTwnHTvzvNGT",
    "wPhPhbCqqSCrtJDlqvlrJr",
    "RVVZddLFRZZcQLvJJtzptlgPJp",
    "TVQRZGVncFdTGWZdCNShHhfPNwwsWPwb",
    "dzLVzPSgrgDDDCMSMLLPwFmdTTcsvmwNwjNsHcFF",
    "nWBGntQfGNGBflWBBqlpRQGbWFvjwsbsFswbvTHjjbmHTc",
    "tBNJBnGBflQnDPJrPhDgrPVg",
    "VtWztWtqpqzWpWzqjNRjNpWTmrrmrSbnmJwSJwnMPrCSJVwM",
    "sDHsBDhBdsBZGcHvLHDLhhCSnRSwCJMZrPbmnMbJSCSR",
    "ccLRhgsLBdRsdHNTFFNNgqTglqzF",
    "hztlmDhPhgPlPNNgmZMCbmwwQjcwjjwMjVCd",
    "RSJRrRqnqQJFqvnTGrHCcHHCCHHbHHMcMvdM",
    "qGJsnQTRsStsftPlhPNl",
    "BFFBLPRCwsLwhlPlRmhcGGrbmmGjfNTTnp",
    "VJMVpzgqggJnrjmjNcMjmT",
    "VqdSZtQgZvtdzqHqHtVZdVQpCDWWFdwlRPDpWPPBCswlWD",
    "fCWCsjPzcbzwRSzVTzhhDLqvdg",
    "TmJtrNJrBLSLJqgS",
    "ptNTQFHrZlnpFPwsWMbRjCpcjR",
    "nJmQNCmbmlllmbClbfMLjMFqbGBsdLFq",
    "ZcgTWcTnMqqMTBqF",
    "tPgctSnPctZZgDWzZgQHwNmHlhlmzlQhlJlw",
    "ZpTCwpffdslvgShCBhqhRz",
    "FDMPnNFNmBPzvRPRBg",
    "nNgMrnnDGjDmJMmnFdZTTsdsrZrslcwcQr",
    "pTmczpCldcdDDnPttpvWSqbpJf",
    "jgjRZMGHhGLgQrjvPWzPJgJvzStbbq",
    "LGNLLNBBzcDFCBwwFC",
    "nJTTqnrNvTzNMzzNfqrTPrJnwpwPpZpsHccZVsBRpcVHwpcp",
    "bgDhgbghLWmFmStctVpZtBCVCCpfZp",
    "LLSgLGSjggFGbSSbmMnrvqvzjfzTNrJrqM",
    "RRpDmmPMTjwfGmJQgQ",
    "WsNscdnvvdVZFVnnrZbjjflwljlbzfGFjQjq",
    "NnLZsNnrrVVVcvdBLTPCPCRMwhPMBMPhCt",
    "lbVvzngGJnVbJHpHtHNPpdSQvc",
    "TsMBswFZsWMWBZMNwPtNNtRNHcNpSQ",
    "CcZCTrZDsjZTsTsshWhrWrTnfgbLDfJzVVLVVlgfnzfVGV",
    "JzTTRtJRZWmWjrMHCT",
    "DDFGlLGcGlSSSLsFGBspPBmNMBHMghmWNmWjWCmWtH",
    "nSSpnbsGlLDnpPsSSspFtVvffRQdVzqvvbqdfVQwRz",
    "sMhzszlHHDsWbthHDqsbJjpLNtmjVJmVLLVLVLBp",
    "nrTPrGwfPLdprzJzdL",
    "wgPQcTGGzgccwCgnRwgRChFhlWSDqWWQMWhssSsMQl",
    "NSNmwtpSpCpvMphCsr",
    "PHcRGPLJMrsvzsqG",
    "QHjbnRMcfbPbQZmlZgZlgBBQ",
    "cPRPbhQjbQRdtPQdLqLHqzFZjCFCqLjC",
    "mmfsnnwrfvwrfSNZFzHHLDCFNlLlqDlN",
    "wsmrwswwGTffMrBnmQttJtcMZQQtPJPbZc",
    "MvBPDDRRdnnvHPCHZLHZsFLL",
    "rmJcbVqbcjWwWjQHLzTZFTHSzFrpsz",
    "cmwllVqqGJbVVVmmqbQcmgRnRvGhGfgDRDZBBBvRdd",
    "nMvMhMnvhnbTZWSSZgHmGJDFmmNDzBmbNmdGBN",
    "rCsPLRCssRjrLLsrLlwRVrcNJQfDQfdBmmfNBGJNzmDPfB",
    "CRjCpLltgtJgJJWq",
    "jshCzJpjzTPpmCWvSlpfwHfSWglf",
    "LQMMNMnHtDtLVRvwwgRWlldgWD",
    "qHVrQNHVMFQtrrBBQMBcrrZsZbzCZhbbJZJsmmsmFPTC",
    "JZQZnsQNMqTngZqJBVfBfPPVBNrwvfPw",
    "SSmDstFjpDpCszDjcLLhrPVlGlrGGVBwrvwVPt",
    "FSssFcLjFjbmFFCzjLcFLRDnMJnTHRnZZTdWqZZWnMnRnZ",
    "GbHRHpldwGMpWhHpCMBlCbRdVSLhnqJLSrDPLPPLPDqVDrhh",
    "gvjWWQvgZFtQFFNqLnVnDnSJzzztDD",
    "ZccccfTsffHdWWdRWwsw",
    "ClCtbHMlnnPPlszV",
    "gSDWSLgWQWQJJNWqgtQjPsnfcdVcLVdVdzfzVzff",
    "WQgqtFQgDgQSFqJhqhSJvNDRrZMZHwHMCbZhTpZbGHMTMG",
    "pZJZlCQtHFhPfdNfCh",
    "zcmLSVczwcMcLDNFHdLPhPWH",
    "szvVVnBmnTGQtHTQ",
    "RVVCNDlNGzlGZqHGHWqWhGqQwH",
    "ZFLFTmpLvvmSqsbb",
    "TrfpBfJpJMlnnNfNZD",
    "qHHlDClHhltMqQsHDhHslGznwdTnzzwDGSdfnwGnwG",
    "mZRNcNcLLPNPBFFbbPmLmbZFSCVfJJTVndVfSwnRzznfTwCS",
    "CcCWFbbBLCWtgWgHjghqvv",
    "TjbzlnlFmfqCFFVVCRWr",
    "PhMcLpPDtMLpwPDvLPJbMhSgVCGqggVqQgCqCgCgSWvv",
    "btbZbNZhJDJJhDtwtsTTTmBzzBBmlNlmHj",
    "FqhjWtqlqmmsnFPTCvMCQMTTCjQd",
    "pfffRfLpgrgGgzrNVzzpGVzRCdMCPJbwwcVMbQPCJVMVdbww",
    "DGGDZRGrHggzSsFQnnWShmtH",
    "vtHVVMMrvVMVrSHvLgvlHcZFCnRCZcccZtRRZfJFCJ",
    "rdDjGsdTQDcNZfdncCRR",
    "rBDsTwBbjbmbbQswswPhqVmmSvpVhlvvqMhHhh",
    "vGBLrqMNvqSLBvvrNbllLHfwStWWtFttccjtRtjtcj",
    "MhCDJmhMDzmcRRcjzWfztH",
    "ZQDmDhVVCQbBVdVNMvvv",
    "ptCtCzhWPWptnhVzzpGZbZTjTjVjFGjVFgVl",
    "fQswRRffmRqZlgrqqFjjSgGg",
    "HwsQDNNsDsmRLLHmffsfvHptBnhtzCvhWpZWBdhnMdCh",
    "RlHzzTqczBPfbnvcpB",
    "wVtNwpSZstppwwMsZhsdnLvnbtBBmbnLFFdnmF",
    "WNQJMVWsZWwGJWhhSNrQzlgHrDCgQRHpCHrl",
    "RrZWpJZRrZpdTGstlchLGGlLMd",
    "NqjDPCQPnQCSvtMzSLhhjM",
    "nQVQDDDDfwBwNCVCNVFNpWpgJgrRTmLTmTmgRTWF",
    "SHMcrMHpcjGcjSrMMbvSvvSvwFTLJwJNtFGFWJNtDLFTLfWN",
    "zqRnPfzQCRzqsmRPzznhszzLtLwQwwFTgWWLDLgWFTwTNQ",
    "qVPZmRZhsCZPhZlRCqRRRCbfpccMBjvMVjdHjjMjSvdf",
    "VVQdHwBZLVltlddtBczhrzvGcWWFRwgsFG",
    "TDTTTqqTSSqjqnmTmPqPPmTmGhRszvsrzsjRsccgzrRzgWGF",
    "DpJPqpWqHbZpllpt",
    "cCSCFsnnZFnscDtNdJFJtJtdmb",
    "VgBqBsqRrHtNdzmNrt",
    "BGLLVVjRBsqPBfsGwPsMfSSZCSfTZTZQpSphfS",
    "plCHCHlgglHHGpNbtngNrDvBDpfQDBQfZDfWZVrr",
    "mTmMLhRfwhsLPQvQZDMZQBQWMB",
    "cwsssmqRTFFfFgtbCtGl",
    "LQPPrCPnMZwqtRMn",
    "cWTSlJWlcplJdDTdGdpDlGcGgqmtwwZtqRrNRRmRdNZqmgNq",
    "GSJcJSjsjTpsvWGWBHLLvVVBBBrFrzVz",
    "NVPCSPMNDSNFVSWCsJJJmpGmZZGLLcpZLHGGtsHt",
    "fwzlBBqghqvzqqlDrHbpHjZHmGZbLZrHLb",
    "dnBgnDqQvwRnSnnFMFMP",
    "BCbPsFFwCRHmDSBmWnvDDj",
    "phhZVzdpVfQZphhZpRhSVnjmrcvvnrWtDrvWDS",
    "TfQJMfLphMhJdfdzpQJRTPbwHHNlgbGwsTGgCP",
    "ttWLlnnvnNnBBtlTqWlpvpndQdZsQQFssFDdsRFdVdRNFQ",
    "jSgrScrbGZSGrrCGsFVMssFsPPFcDDMV",
    "bzSmJbfCZCbzLwllflwqtvvw",
    "zmFTJwFLPmzLztmjDzTJwfNrdFNrFppBSNRGNGdbrpBR",
    "gqlhWQgsZMsvqMlMMvsvqsNlLbcdppbrRpdbbcSrrbbr",
    "vssCgVgCsggZQZCgsnsqWgWvfJPDLwffwTPPmzTnjTPmPmwJ",
    "SpcRTPQLBLWpNNzjmmwwwRrR",
    "tGlfvGhfnbDlbqlChnfFMrwsmwNssTMHMHjFwv",
    "ZlhtCtffCdWcZWZVVT",
    "jTTCcWHWJNgCGTzTmnzrmnGn",
    "BwRRbFvtvvQmJJFMpMJr",
    "ZBBwLvqbBZsRsbVsZSqbcZdJjHHjhfPCJfJfHhgc",
    "VrnDSvvrLrfTdTLGfdRp",
    "zcJzmcFcHGfdGmWTVd",
    "tHsMhwPVctccHFHFcbSDbbPjnNbBnbvBQB",
    "QttWQwLTnLnWTtnffnLQSBFVjNvBjBFNgMdCsVWsjv",
    "pDqcmmRPHqgVBddjvN",
    "DcclzbcbPbJLnNTfnw",
    "plRcpsZDGlGZvWvMCNcLtttq",
    "SrfrwSjSVrSjwbmSrHzmHJCQQPQzqttNNQJMzJtqMW",
    "wSHVnfHfWwwHWFVfSnfgmmRsslFZZDBBGZsZsDTdGRTp",
    "qSFQSgQNgQBrBHHcrW",
    "VTmjVJLTwlTmwTVmsMJMVlJmPvcbvvbCBbGBPjGvBbBGWcbb",
    "DnJTZwmnZRhnpqNdWt",
    "dTVHjZLLZDVCfVHtLDDjQbscjWbSJMJPjsbWWb",
    "FnqrnmzzFllmsWwtsFtQMMFc",
    "lmqzzzngGmlNNBqGllzlBNRvptHHpTCHpDLpgDZdgvHvDD",
    "sdRZQbCfZTSTdlfTZCffccWPHPPcPPwLwctRnLWn",
    "BBJDzFVgCDrCJrqDJJhqJVVMLPHwcctFwcWHHGLcwGwGHnWc",
    "ghpJgqqjCZbQdZpd",
    "tbcpzbHSszcHBgqHGZgJJJhhww",
    "jfvdvRTffQQrrFCRFTnGwJRqNRZVpJGZLZggLh",
    "nQTjTnMndlTdQFMvnrClCnpzmzDtbbmBbcPSzzlmmtzP",
    "BqBqTCSTcqHsJHHM",
    "WWPGVPLtzVgWtjWPGzVjzVGcbDhPsRbDcsbJwNRswRDRss",
    "VQfWjfLFGWLjdFfVzTZZpJTpnmlTrSQlBl",
    "jLNsZjqSHCsGdsmpsm",
    "MvnVFzWMwMVWzfnVDwfBMfnnrCtdtPmPlRrdrJCJrtPDrrPD",
    "zznfFWwMfMfFMwVTMQFnQjhjgjSZhCNbLSTcHHgbbC",
    "GGtssttVmvnnGNMQrrVzgwVrCWMz",
    "FdhfhhcCDhHLfzclZMcrwcQMZM",
    "HHqqCBhHSSpdmjGqmGjtjtjj",
    "bbQLtGMQQtQRQtrDtGprrrbCqwplZhhqSqmdwvdzqqqhSmpS",
    "FsJjJBfnsJcFcFfjVPjWBzldqhqnlZZZzzhmnSvSnm",
    "JPcFfFWjFHJVVsVjPVscsDlLNRHGDbLRMRCDNrCGbG",
    "JdMdlMRJnTwdvcjv",
    "CDLHbNSzzLFgHvnTjrswBNBTNT",
    "QgbvzSFQmZQPQQRW",
    "NTBrNzrpjjjCwGbB",
    "FRbQlcvFvcRQQlRsMlRRRZjwCqMwjmjwJZdLJmjCZC",
    "cVPPQcvlWDNhrbPz",
    "VdbVtbbZJdtJVVdDVZmTLqqTSQvNLjjDShhvSG",
    "zplpnBnFpnrrlghGNpLNqHvqvjNj",
    "cWncllnlPFWzcMwtWWtsVLVRmJWCds",
    "ShLSTnZnTSttTSbLQdfSZTMwcDHwwcHnJvDHnlnlclMM",
    "NmPMsssRrVwjDclHJwwR",
    "gNNMWGzNmqGdtfZTbGGb",
    "sWNNlRHnmJtmntJt",
    "brbbBTbbFbCbqqGgBTrCfmQVVZfSSQQSVtJZSrVZ",
    "bbFqvbDvvGGLGbCCtBGDLbLlcPNHhhccPNcdPPchlsdR",
    "DCFvDvnCnNfMBmMMslDZML",
    "SQQQJHwpSgJSJHQWSWHqJWWbmcBBBLLTsmhhTcZbMhmlshcb",
    "RJRgpJHssgwSQHRqsQPGGjjtNCrrFvvnFjjPrP",
    "mThmsgjzTPjMpcvtWP",
    "GNNBVqVGNZbbNbNqqZQVNVNbWcpdtMCcpCtMWCdCPpQccmpp",
    "VSmNrmmbBfZVlsrssrLTRhRhTn",
    "TdmCvLDCpTRNTdFbbWnnSWCfhjbbzn",
    "GrrMsPVGcQHBGMbhjjSgWfHHDbjb",
    "BPBVqqrQPsQqwrrmmmJdRLDDqFRplT",
    "fpDDJljDlCfDTjprjrfbddWthCSCtdPPQFhSSSWW",
    "HsLZgMGbgBBsNzMvGbdVtVQzFRQSthhFPdtP",
    "sMBmGBmbNvLHGMnrDppTcJmcjpqljf",
    "ptSpSJQqpbNGGDDhcMWrlNHcZZWWls",
    "zRLRRRjvvgjHMMsMpWpc",
    "vmCPLCgwvwdnCzmvLbpTbVQqJJPbJPpTVq",
    "TJCfhhJVFffrJJQQllNWcvWhwvWD",
    "GPSGjjpLslBbpLpLqqqPDvdwvwvNzQWGzDDNdzGN",
    "msbRjbpPqsRpHnlZrmJlnVHT",
    "GGfFsCCTvGDsfTTrhsCMMzptZJMdpdgtrpdMcV",
    "LBlwBHPSqjwwlVggHpnMZcVHMt",
    "ZlZZlBbRPGGTGfmRsD",
    "CtCjbVvzQQZTWVdd",
    "MlSqWlmsmGBSHJHTDFHZ",
    "pcqsmsplwsqclwRtRWgtRnPPvb",
    "zCrzCrsdjrhGDCFqGDjRRPtpWfQQcpfQZcCZPp",
    "VSVwVMgLHHLTwMDTMMVnbWPRZQRcRQPptWnpbZcb",
    "MNBBBlSMvLVwTlVTFdNdhNhFsqsGDrzm",
    "rBLWTwTThWwVVDTwHBsZZWppvpGtpptppmRvFFFMFMfL",
    "qPPNCCbqcbcNqbqQjjJQqzjRpptmlpMGmMlJtftmtFHpMt",
    "QnCgzzQbbQqPcPQnncbdQdnVTwDssZgrShBTVgZZsBSDHT",
    "PFGJFqnfqmPgFJQPWdbLdpDRhbphWjDm",
    "rclNHvcrzCNwrWRprjdMMMph",
    "wsZHwZNvRRQsQqBV",
    "LqlGCPlPLTCPqqQlpqLlWfBfWgcHNRJRfWNsncGH",
    "VVtdwVtDDdVmhrdwSBmjbdzNHgfgJnNnsSnHsNffHgRsgR",
    "wVzhbjmDbDrwjdbztFDDthMCvqPppZQBQLZQTqTvFTvZ",
    "BnQnQFwRmRwmwdBSFDFnmSDVLCJTCTppVVmGLVTCLcgVpC",
    "ZlWvhvZjNrbNvqjNhlfPfqjCGHrsspggTpVLpsJCpcJVgg",
    "vPzNvqjWhqFzGSnRGMDG",
    "wZnMZzzZZchDRtVsqtCtwV",
    "WmWpWWmPPWrmrmBmWrTlTFPNVqVCRSDCQHcqVTtTqsSDSTSD",
    "PrppdFlWWlfrWmpWFffrdcGjJJGggnnhZGdLLgGGndvz",
    "FShHNmNhRhNJmBnQBQJrmP",
    "VTgzDTjwfffwzDvwlcczzVSJbQlBQSWBWCnPJPbJWWbC",
    "tzSVtzvSvGSRZqqFMNtpRR",
    "hPZhGDZpnCGtDhznjmLmdJffdNzJ",
    "glwsSrQwBvLdgLzdcj",
    "QsRbHllzzlHwHlBszWlTBFbpDPMhbPDVGpGFpPtFPp",
    "SRjStRDctgDSBzLvPvNrDhmPLr",
    "QqTHGTPJmmHmhNmH",
    "TGQZsTqFnQZCJTPsnJnZQMjVRBVtcVRSVRBlwccSCtBS",
    "bbsNsvsvnNPTRRllbblLqhtQCqQSLCGGHSqHNC",
    "wFpzFgqVzqVJWFDwqJDmSBBmHBHhShLQhCGSBCGH",
    "MJVpFMqgwMqRRbZsMbZMrP",
    "PPdDhvNDQdmgQPZmQVHHtHGGWVGbffWGvs",
    "MMLCTRRLlLclTLRMRLCwMLHWVctbVVHWWWFfVjVGsFWW",
    "MRSMMlpTJRqClBCRqBDnzqgQPnqgznZPZqbP",
    "MrMNPNNpjvdprWtrpMsthqBfqlnfqcGhVBqFRcnqFG",
    "QbDgSSQbgSDDmDVmlqSCRllRcFqnqfBl",
    "QVJbVmwwDQbzVTgbppNJNMWNjNNPrdpM",
    "WwJJNbtHfpLpVgZZPVFhZh",
    "vmmqlDvRvRfqBSrlzmmMjRBhcVhQVZhVghCQQQQTcTrPTP",
    "jSqMmqRzMDDjvqlBqsBMBmmwGNJwJnwLNfbGwddswnJtJH",
    "RLgRmRggbvbzzPmmRNmzsQWFtSGNtwSNQnntFwnnCw",
    "pDBrBHpHhlldphHBHhJVFSLnWWFJttCtQSttSS",
    "hfHrpphHBppfTvmzgMmbLbgf",
  ])
);
