import { SampPlayer } from "./SampPlayer";
import { KEY, BODY_PARTS } from "./SampEnum";
export declare const OnGameModeInit: (func: () => void) => void;
export declare const OnGameModeExit: (func: () => void) => void;
export declare const OnFilterScriptInit: (func: () => void) => void;
export declare const OnFilterScriptExit: (func: () => void) => void;
export declare const OnPlayerConnect: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerDisconnect: (func: (player: SampPlayer, reason: number) => void) => void;
export declare const OnPlayerSpawn: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerDeath: (func: (player: SampPlayer, killerid: SampPlayer, reason: number) => void) => void;
export declare const OnVehicleSpawn: (func: (vehicleid: number) => void) => void;
export declare const OnVehicleDeath: (func: (vehicleid: number, killerid: SampPlayer) => void) => void;
export declare const OnPlayerText: (func: (player: SampPlayer, text: string) => void) => void;
export declare const OnPlayerCommandText: (func: (player: SampPlayer, cmdtext: string) => void) => void;
export declare const OnPlayerRequestClass: (func: (player: SampPlayer, classid: number) => void) => void;
export declare const OnPlayerEnterVehicle: (func: (player: SampPlayer, vehicleid: number, ispassenger: number) => void) => void;
export declare const OnPlayerExitVehicle: (func: (player: SampPlayer, vehicleid: number) => void) => void;
export declare const OnPlayerStateChange: (func: (player: SampPlayer, newstate: number, oldstate: number) => void) => void;
export declare const OnPlayerEnterCheckpoint: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerLeaveCheckpoint: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerEnterRaceCheckpoint: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerLeaveRaceCheckpoint: (func: (player: SampPlayer) => void) => void;
export declare const OnRconCommand: (func: (cmd: string) => void) => void;
export declare const OnPlayerRequestSpawn: (func: (player: SampPlayer) => void) => void;
export declare const OnObjectMoved: (func: (objectid: number) => void) => void;
export declare const OnPlayerObjectMoved: (func: (player: SampPlayer, objectid: number) => void) => void;
export declare const OnPlayerPickUpPickup: (func: (player: SampPlayer, pickupid: number) => void) => void;
export declare const OnVehicleMod: (func: (player: SampPlayer, vehicleid: number, componentid: number) => void) => void;
export declare const OnEnterExitModShop: (func: (player: SampPlayer, enterexit: number, interiorid: number) => void) => void;
export declare const OnVehiclePaintjob: (func: (player: SampPlayer, vehicleid: number, paintjobid: number) => void) => void;
export declare const OnVehicleRespray: (func: (player: SampPlayer, vehicleid: number, color1: number, color2: number) => void) => void;
export declare const OnVehicleDamageStatusUpdate: (func: (vehicleid: number, player: SampPlayer) => void) => void;
export declare const OnUnoccupiedVehicleUpdate: (func: (vehicleid: number, player: SampPlayer, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void) => void;
export declare const OnPlayerSelectedMenuRow: (func: (player: SampPlayer, row: number) => void) => void;
export declare const OnPlayerExitedMenu: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerInteriorChange: (func: (player: SampPlayer, newinteriorid: number, oldinteriorid: number) => void) => void;
export declare const OnPlayerKeyStateChange: (func: (player: SampPlayer, newkeys: KEY, oldkeys: KEY) => void) => void;
export declare const OnRconLoginAttempt: (func: (ip: string, password: string, success: number) => void) => void;
export declare const OnPlayerUpdate: (func: (player: SampPlayer) => void) => void;
export declare const OnPlayerStreamIn: (func: (player: SampPlayer, forplayer: SampPlayer) => void) => void;
export declare const OnPlayerStreamOut: (func: (player: SampPlayer, forplayer: SampPlayer) => void) => void;
export declare const OnVehicleStreamIn: (func: (vehicleid: number, forplayer: SampPlayer) => void) => void;
export declare const OnVehicleStreamOut: (func: (vehicleid: number, forplayer: SampPlayer) => void) => void;
export declare const OnActorStreamIn: (func: (actorid: number, forplayer: SampPlayer) => void) => void;
export declare const OnActorStreamOut: (func: (actorid: number, forplayer: SampPlayer) => void) => void;
export declare const OnDialogResponse: (func: (player: SampPlayer, dialogid: number, response: number, listitem: number, inputtext: string) => void) => void;
export declare const OnPlayerTakeDamage: (func: (player: SampPlayer, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void) => void;
export declare const OnPlayerGiveDamage: (func: (player: SampPlayer, damagedid: number, amount: number, weaponid: number, bodypart: number) => void) => void;
export declare const OnPlayerGiveDamageActor: (func: (player: SampPlayer, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void) => void;
export declare const OnPlayerClickMap: (func: (player: SampPlayer, fX: number, fY: number, fZ: number) => void) => void;
export declare const OnPlayerClickTextDraw: (func: (player: SampPlayer, clickedid: number) => void) => void;
export declare const OnPlayerClickPlayerTextDraw: (func: (player: SampPlayer, playertextid: number) => void) => void;
export declare const OnIncomingConnection: (func: (player: SampPlayer, ip_address: string, port: number) => void) => void;
export declare const OnTrailerUpdate: (func: (player: SampPlayer, vehicleid: number) => void) => void;
export declare const OnVehicleSirenStateChange: (func: (player: SampPlayer, vehicleid: number, newstate: number) => void) => void;
export declare const OnPlayerFinishedDownloading: (func: (player: SampPlayer, virtualworld: number) => void) => void;
export declare const OnPlayerClickPlayer: (func: (player: SampPlayer, clickedplayer: SampPlayer, source: number) => void) => void;
export declare const OnPlayerSelectObject: (func: (player: SampPlayer, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void) => void;
export declare const OnPlayerWeaponShot: (func: (player: SampPlayer, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void) => void;
export declare const OnClientCheckResponse: (func: (player: SampPlayer, actionid: number, memaddr: number, retndata: number) => void) => void;
export declare const OnScriptCash: (func: (player: SampPlayer, amount: number, source: number) => void) => void;
export declare class SampEvents {
    static OnGameModeInit(func: () => void): void;
    static OnGameModeExit(func: () => void): void;
    static OnFilterScriptInit(func: () => void): void;
    static OnFilterScriptExit(func: () => void): void;
    static OnPlayerConnect(func: (player: SampPlayer) => void): void;
    static OnPlayerDisconnect(func: (player: SampPlayer, reason: number) => void): void;
    static OnPlayerSpawn(func: (player: SampPlayer) => void): void;
    static OnPlayerDeath(func: (player: SampPlayer, killerid: SampPlayer, reason: number) => void): void;
    static OnVehicleSpawn(func: (vehicleid: number) => void): void;
    static OnVehicleDeath(func: (vehicleid: number, killerid: SampPlayer) => void): void;
    static OnPlayerText(func: (player: SampPlayer, text: string) => void): void;
    static OnPlayerCommandText(func: (player: SampPlayer, cmdtext: string) => void): void;
    static OnPlayerRequestClass(func: (player: SampPlayer, classid: number) => void): void;
    static OnPlayerEnterVehicle(func: (player: SampPlayer, vehicleid: number, ispassenger: number) => void): void;
    static OnPlayerExitVehicle(func: (player: SampPlayer, vehicleid: number) => void): void;
    static OnPlayerStateChange(func: (player: SampPlayer, newstate: number, oldstate: number) => void): void;
    static OnPlayerEnterCheckpoint(func: (player: SampPlayer) => void): void;
    static OnPlayerLeaveCheckpoint(func: (player: SampPlayer) => void): void;
    static OnPlayerEnterRaceCheckpoint(func: (player: SampPlayer) => void): void;
    static OnPlayerLeaveRaceCheckpoint(func: (player: SampPlayer) => void): void;
    static OnRconCommand(func: (cmd: string) => void): void;
    static OnPlayerRequestSpawn(func: (player: SampPlayer) => void): void;
    static OnObjectMoved(func: (objectid: number) => void): void;
    static OnPlayerObjectMoved(func: (player: SampPlayer, objectid: number) => void): void;
    static OnPlayerPickUpPickup(func: (player: SampPlayer, pickupid: number) => void): void;
    static OnVehicleMod(func: (player: SampPlayer, vehicleid: number, componentid: number) => void): void;
    static OnEnterExitModShop(func: (player: SampPlayer, enterexit: number, interiorid: number) => void): void;
    static OnVehiclePaintjob(func: (player: SampPlayer, vehicleid: number, paintjobid: number) => void): void;
    static OnVehicleRespray(func: (player: SampPlayer, vehicleid: number, color1: number, color2: number) => void): void;
    static OnVehicleDamageStatusUpdate(func: (vehicleid: number, player: SampPlayer) => void): void;
    static OnUnoccupiedVehicleUpdate(func: (vehicleid: number, player: SampPlayer, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void;
    static OnPlayerSelectedMenuRow(func: (player: SampPlayer, row: number) => void): void;
    static OnPlayerExitedMenu(func: (player: SampPlayer) => void): void;
    static OnPlayerInteriorChange(func: (player: SampPlayer, newinteriorid: number, oldinteriorid: number) => void): void;
    static OnPlayerKeyStateChange(func: (player: SampPlayer, newkeys: KEY, oldkeys: KEY) => void): void;
    static OnRconLoginAttempt(func: (ip: string, password: string, success: number) => void): void;
    static OnPlayerUpdate(func: (player: SampPlayer) => void): void;
    static OnPlayerStreamIn(func: (player: SampPlayer, forplayer: SampPlayer) => void): void;
    static OnPlayerStreamOut(func: (player: SampPlayer, forplayer: SampPlayer) => void): void;
    static OnVehicleStreamIn(func: (vehicleid: number, forplayer: SampPlayer) => void): void;
    static OnVehicleStreamOut(func: (vehicleid: number, forplayer: SampPlayer) => void): void;
    static OnActorStreamIn(func: (actorid: number, forplayer: SampPlayer) => void): void;
    static OnActorStreamOut(func: (actorid: number, forplayer: SampPlayer) => void): void;
    static OnDialogResponse(func: (player: SampPlayer, dialogid: number, response: number, listitem: number, inputtext: string) => void): void;
    static OnPlayerTakeDamage(func: (player: SampPlayer, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void): void;
    static OnPlayerGiveDamage(func: (player: SampPlayer, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void;
    static OnPlayerGiveDamageActor(func: (player: SampPlayer, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void;
    static OnPlayerClickMap(func: (player: SampPlayer, fX: number, fY: number, fZ: number) => void): void;
    static OnPlayerClickTextDraw(func: (player: SampPlayer, clickedid: number) => void): void;
    static OnPlayerClickPlayerTextDraw(func: (player: SampPlayer, playertextid: number) => void): void;
    static OnIncomingConnection(func: (player: SampPlayer, ip_address: string, port: number) => void): void;
    static OnTrailerUpdate(func: (player: SampPlayer, vehicleid: number) => void): void;
    static OnVehicleSirenStateChange(func: (player: SampPlayer, vehicleid: number, newstate: number) => void): void;
    static OnPlayerFinishedDownloading(func: (player: SampPlayer, virtualworld: number) => void): void;
    static OnPlayerClickPlayer(func: (player: SampPlayer, clickedplayer: SampPlayer, source: number) => void): void;
    static OnPlayerSelectObject(func: (player: SampPlayer, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void;
    static OnPlayerWeaponShot(func: (player: SampPlayer, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void;
    static OnClientCheckResponse(func: (player: SampPlayer, actionid: number, memaddr: number, retndata: number) => void): void;
    static OnScriptCash(func: (player: SampPlayer, amount: number, source: number) => void): void;
}
