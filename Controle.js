function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifmail(f.email);
   if(pseudoOk && mailOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
