package br.com.rest.controllers;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Pessoa {
	
	private String nome = "John";
	private int idade = 27;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	
	

}
