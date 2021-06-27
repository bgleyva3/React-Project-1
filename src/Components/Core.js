const asyncResponses = {};
const responses = {};
const handlers = {};
const onces = {};
const commands = {};


export function respondAsync(queryName, response)
{
  asyncResponses[queryName] = response;
}
export async function queryAsync(queryName, params)
{
  const q = asyncResponses[queryName];
  if(q)
    return new Promise(q);
}


export function respond(queryName, response)
{
  responses[queryName] = response;
}

export async function query(queryName, params)
{
  const q = responses[queryName];
  return await q(params);
}

export function addEventListener(event, handler)
{
  (handlers[event] = handlers[event] || []).push(handler);
}

export function removeEventListener(event, handler)
{
  let h = handlers[event], i;
  if(h && (i = h.indexOf(handler)) != -1)
    h.splice(i, 1);
}

export function addOnceEventListener(event, handler)
{
  addEventListener(event, handler);
  onces.push(handler);
}

export function removeOnceEventListener(event, handler)
{
  removeEventListener(event, handler);
  onces.splice(onces.indexOf(handler), 1);
}

export function dispatchEvent(event, data){
	const h = handlers[event];
	if(!h)
		return;
	for(let i in h){
		h[i](data);
		var j = onces.indexOf(h[i]);
		if(j != -1){
			h.splice(i, 1);
			onces.splice(j, 1);
		}
	}
};

export function addCommand(name, command)
{
  commands[name] = command;
}

export function removeCommand(name)
{
  if(commands[name])
    delete commands[name];
}

export function exec(name, props)
{
  const c = commands[name];
  if(c)
    c(props);
}

const Core = {
  query, respond, addEventListener, removeEventListener,
  addOnceEventListener, removeOnceEventListener, dispatchEvent,
  addCommand, removeCommand, exec
};

export default Core;
