//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={};
let re=/\bthe\b|\ban\b|\ba\b/g;
let ar=[];
for(let i=0;i<arr.length;i++){
	let arl=arr[i].replace(re,"").trim();
	ar.push(ar).push(arl);
}
ar.sort();
let ans=[];
for(let i of ar){
	ans.push{mp[i]};
}
console.log(ans);
