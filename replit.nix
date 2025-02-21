{ pkgs ? import <nixpkgs> {} }:
let
	myPackages = [
		pkgs.yarn
		pkgs.jest  # Asegúrate de que este sea el nombre correcto
	];
in
pkgs.mkShell {
	buildInputs = myPackages;
}
