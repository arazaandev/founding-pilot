type Entry={count:number;resetAt:number};const memory=new Map<string,Entry>();
export async function allowSubmission(key:string){const now=Date.now(),current=memory.get(key);if(!current||current.resetAt<=now){memory.set(key,{count:1,resetAt:now+15*60_000});return true}if(current.count>=5)return false;current.count+=1;return true}
