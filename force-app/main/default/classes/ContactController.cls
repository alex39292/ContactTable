public with sharing class ContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        return [SELECT Id, FirstName, LastName, Email, Account.Name, MobilePhone, CreatedDate FROM Contact];
    }
}